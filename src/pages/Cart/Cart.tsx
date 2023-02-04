import { useMutation, useQuery } from '@tanstack/react-query'
import { Link, useLocation } from 'react-router-dom'

import purchaseApi from 'src/api/purchase.api'
import Button from 'src/components/Button'
import QuantityController from 'src/components/QuantityController'
import path from 'src/constants/path'
import { purchasesStatus } from 'src/constants/purchase'
import { formatCurrency, generateNameId } from 'src/utils/utils'
import noproduct from 'src/assets/images/noproduct.png'
import React, { useEffect, useMemo, useState } from 'react'
import { ExtendedPurchase, Purchase } from 'src/types/purchase.type'
import produce from 'immer'
import keyBy from 'lodash/keyBy'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

export default function Cart() {
  const { t } = useTranslation(['cart', 'product'])
  const [extendedPurchases, setExtendedPurchases] = useState<ExtendedPurchase[]>([])

  const { data: purchasesInCartData, refetch } = useQuery({
    queryKey: ['purchases', { status: purchasesStatus.inCart }],
    queryFn: () => purchaseApi.getPurchases({ status: purchasesStatus.inCart })
  })
  const updatePurchaseMutation = useMutation({
    mutationFn: purchaseApi.updatePurchase,
    onSuccess: () => refetch()
  })
  const deletePurchasesMutation = useMutation({
    mutationFn: purchaseApi.deletePurchases,
    onSuccess: () => refetch()
  })
  const buyProductsMutation = useMutation({
    mutationFn: purchaseApi.buyPurchases,
    onSuccess: (data) => {
      toast.success(data.data.message, {
        position: 'top-center',
        autoClose: 1000
      })
      refetch()
    }
  })

  const location = useLocation()
  const choosenPurchaseIdFromLocation = (location.state as { purchaseId: string } | null)?.purchaseId
  const purchasesInCart = purchasesInCartData?.data.data

  const isAllChecked = useMemo(() => extendedPurchases.every((purchase) => purchase.checked), [extendedPurchases])
  const purchasesChecked = useMemo(() => extendedPurchases.filter((purchase) => purchase.checked), [extendedPurchases])
  const purchasesCheckedCount = purchasesChecked.length

  const totalPurchaseCheckedPrice = useMemo(
    () =>
      purchasesChecked.reduce((result, current) => {
        return result + current.product.price * current.buy_count
      }, 0),
    [purchasesChecked]
  )
  const totalPurchaseCheckedSavingPrice = useMemo(
    () =>
      purchasesChecked.reduce((result, current) => {
        return result + (current.product.price_before_discount - current.product.price) * current.buy_count
      }, 0),
    [purchasesChecked]
  )

  useEffect(() => {
    setExtendedPurchases((prev) => {
      const extendedPurchasesObject = keyBy(prev, '_id')
      return (
        purchasesInCart?.map((purchase) => {
          const isChoosenPurchaseFromLocation = choosenPurchaseIdFromLocation === purchase._id
          return {
            ...purchase,
            disabled: false,
            checked: isChoosenPurchaseFromLocation || Boolean(extendedPurchasesObject[purchase._id]?.checked)
          }
        }) || []
      )
    })
  }, [purchasesInCart, choosenPurchaseIdFromLocation])

  useEffect(() => {
    return () => {
      history.replaceState(null, '')
    }
  }, [])

  const handleCheck = (purchaseId: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setExtendedPurchases(
      produce((draft) => {
        draft[purchaseId].checked = event.target.checked
      })
    )
  }
  const handleCheckAll = () => {
    setExtendedPurchases((prev) =>
      prev.map((purchase) => ({
        ...purchase,
        checked: !isAllChecked
      }))
    )
  }

  const handleTypeQuantity = (purchaseId: number) => (value: number) => {
    setExtendedPurchases(
      produce((draft) => {
        draft[purchaseId].buy_count = value
      })
    )
  }

  const handleQuantity = (purchaseId: number, value: number, enabled: boolean) => {
    if (enabled) {
      const purchase = extendedPurchases[purchaseId]
      setExtendedPurchases(
        produce((draft) => {
          draft[purchaseId].disabled = true
        })
      )
      updatePurchaseMutation.mutate({ product_id: purchase.product._id, buy_count: value })
    }
  }

  const handleDelete = (purchaseIdex: number) => () => {
    const purchasesId = extendedPurchases[purchaseIdex]._id
    deletePurchasesMutation.mutate([purchasesId])
  }

  const handleDeleteManyPurchases = () => {
    const purchaseIds = purchasesChecked.map((purchase) => purchase._id)
    if (purchasesCheckedCount > 0) deletePurchasesMutation.mutate(purchaseIds)
  }

  const handleBuyPurchases = () => {
    if (purchasesCheckedCount > 0) {
      const body = purchasesChecked.map((purchase) => ({
        product_id: purchase.product._id,
        buy_count: purchase.buy_count
      }))
      buyProductsMutation.mutate(body)
    }
  }

  return (
    <div className='bg-neutral-100 py-16'>
      <div className='container'>
        {extendedPurchases && extendedPurchases.length > 0 ? (
          <>
            <div className='overflow-auto'>
              <div className='min-w-[1000px]'>
                <div className='grid grid-cols-12 rounded-sm bg-white py-5 px-9 text-sm capitalize text-gray-500 shadow'>
                  <div className='col-span-6'>
                    <div className='flex items-center'>
                      <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                        <input
                          type='checkbox'
                          checked={isAllChecked}
                          onChange={handleCheckAll}
                          className='h-5 w-5 accent-orange'
                        />
                      </div>
                      <div className='flex-grow text-black'>{t('product')}</div>
                    </div>
                  </div>
                  <div className='col-span-6'>
                    <div className='grid grid-cols-5 text-center'>
                      <div className='col-span-2'>{t('price')}</div>
                      <div className='col-span-1'>{t('product:quantity')}</div>
                      <div className='col-span-1'>{t('total price')}</div>
                      <div className='col-span-1'>{t('action')}</div>
                    </div>
                  </div>
                </div>
                {extendedPurchases.length > 0 && (
                  <div className='my-3 rounded-sm bg-white p-5 shadow'>
                    {extendedPurchases.map((purchase, index) => (
                      <div
                        key={purchase._id}
                        className='mb-5 grid grid-cols-12 items-center rounded-sm border border-gray-200 bg-white py-5 px-4 text-center text-sm text-gray-500 first:mt-0'
                      >
                        <div className='col-span-6'>
                          <div className='flex'>
                            <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                              <input
                                type='checkbox'
                                checked={purchase.checked}
                                onChange={handleCheck(index)}
                                className='h-5 w-5 accent-orange'
                              />
                            </div>
                            <div className='flex-grow'>
                              <div className='flex'>
                                <Link
                                  className='h-20 w-20 flex-shrink-0'
                                  to={`${path.home}${generateNameId({
                                    name: purchase.product.name,
                                    id: purchase.product._id
                                  })}`}
                                >
                                  <img alt={purchase.product.name} src={purchase.product.image} />
                                </Link>
                                <div className='flex-grow px-2 pt-1 pb-2'>
                                  <Link
                                    to={`${path.home}${generateNameId({
                                      name: purchase.product.name,
                                      id: purchase.product._id
                                    })}`}
                                    className='text-left line-clamp-2'
                                  >
                                    {purchase.product.name}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-span-6'>
                          <div className='grid grid-cols-5 items-center'>
                            <div className='col-span-2'>
                              <div className='flex items-center justify-center'>
                                <span className='text-gray-300 line-through'>
                                  ₫{formatCurrency(purchase.product.price_before_discount)}
                                </span>
                                <span className='ml-3'>₫{formatCurrency(purchase.product.price)}</span>
                              </div>
                            </div>
                            <div className='col-span-1'>
                              <QuantityController
                                max={purchase.product.quantity}
                                value={purchase.buy_count}
                                classNameWrapper='flex items-center'
                                onIncrease={(value) => handleQuantity(index, value, value <= purchase.product.quantity)}
                                onDecrease={(value) => handleQuantity(index, value, value >= 1)}
                                onType={handleTypeQuantity(index)}
                                onFocusOut={(value) =>
                                  handleQuantity(
                                    index,
                                    value,
                                    value >= 1 &&
                                      value <= purchase.product.quantity &&
                                      value !== (purchasesInCart as Purchase[])[index].buy_count
                                  )
                                }
                                disabled={purchase.disabled}
                              />
                            </div>
                            <div className='col-span-1'>
                              <span className='text-orange'>
                                ₫{formatCurrency(purchase.product.price * purchase.buy_count)}
                              </span>
                            </div>
                            <div className='col-span-1'>
                              <button
                                onClick={handleDelete(index)}
                                className='bg-none text-black transition-colors hover:text-orange'
                              >
                                {t('delete')}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className='sticky bottom-0 z-10 mt-8 flex flex-col rounded-sm border border-gray-100 bg-white p-5 shadow sm:flex-row sm:items-center'>
              <div className='flex items-center'>
                <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                  <input
                    type='checkbox'
                    checked={isAllChecked}
                    onChange={handleCheckAll}
                    className='h-5 w-5 accent-orange'
                  />
                </div>
                <button className='mx-3 border-none bg-none' onClick={handleCheckAll}>
                  {t('select all')} ({extendedPurchases.length})
                </button>
                <button onClick={handleDeleteManyPurchases} className='mx-3 border-none bg-none'>
                  {t('delete')}
                </button>
              </div>
              <div className='mt-5 flex flex-col sm:ml-auto sm:mt-0 sm:flex-row sm:items-center'>
                <div>
                  <div className='flex items-center sm:justify-end'>
                    <div>
                      {t('total payment')} ({purchasesCheckedCount} {t('product')}):
                    </div>
                    <div className='ml-2 text-2xl text-orange'>{formatCurrency(totalPurchaseCheckedPrice)}đ</div>
                  </div>
                  <div className='flex items-center text-sm sm:justify-end'>
                    <div className='text-gray-500'>{t('saving')}:</div>
                    <div className='ml-6 text-orange'>{formatCurrency(totalPurchaseCheckedSavingPrice)}đ</div>
                  </div>
                </div>
                <Button
                  className='mt-5 flex h-10 w-52 items-center justify-center bg-red-500 text-sm uppercase text-white hover:bg-red-600 sm:ml-4 sm:mt-0'
                  onClick={handleBuyPurchases}
                  disabled={buyProductsMutation.isLoading}
                >
                  {t('buy')}
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className='text-center'>
            <img src={noproduct} alt='no purchase' className='mx-auto h-24 w-24' />
            <div className='mt-5 font-bold text-gray-400'>{t('cart empty')}</div>
            <div className='mt-5 text-center'>
              <Link
                to={path.home}
                className=' rounded-sm bg-orange px-10 py-2  uppercase text-white transition-all hover:bg-orange/80'
              >
                {t('product:buynow')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
