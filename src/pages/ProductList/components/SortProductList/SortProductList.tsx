import omit from 'lodash/omit'
import { createSearchParams, Link, useNavigate } from 'react-router-dom'
import path from 'src/constants/path'
import { sortBy, order as orderContant } from 'src/constants/product'
import { QueryConfig } from 'src/hooks/useQueryConfig'
import { ProductListConfig } from 'src/types/product.type'
interface Props {
  queryConfig: QueryConfig
  pageSize: number
}

export default function SortProductList({ queryConfig, pageSize }: Props) {
  const { sort_by = sortBy.createdAt, order } = queryConfig
  const page = Number(queryConfig.page)
  const navigate = useNavigate()

  const isActiveSortBy = (sortByValue: Exclude<ProductListConfig['sort_by'], undefined>) => {
    return sort_by === sortByValue
  }

  const handleSort = (sortByValue: Exclude<ProductListConfig['sort_by'], undefined>) => {
    navigate({
      pathname: path.home,
      search: createSearchParams(
        omit(
          {
            ...queryConfig,
            sort_by: sortByValue
          },
          ['order']
        )
      ).toString()
    })
  }

  const handlePriceOrder = (orderValue: Exclude<ProductListConfig['order'], undefined>) => {
    navigate({
      pathname: path.home,
      search: createSearchParams({
        ...queryConfig,
        sort_by: sortBy.price,
        order: orderValue
      }).toString()
    })
  }

  return (
    <div className='bg-gray-300/40 py-4 px-3'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex flex-wrap items-center gap-2'>
          <div>Sắp xếp theo</div>
          <button
            className={`${
              isActiveSortBy(sortBy.view)
                ? 'bg-orange text-white hover:bg-orange/80'
                : 'bg-white text-black hover:bg-slate-100'
            } h-8  px-4 text-center text-sm capitalize `}
            onClick={() => handleSort(sortBy.view)}
          >
            Phổ biến
          </button>
          <button
            className={`${
              isActiveSortBy(sortBy.createdAt)
                ? 'bg-orange text-white hover:bg-orange/80'
                : 'bg-white text-black hover:bg-slate-100'
            } h-8  px-4 text-center text-sm capitalize `}
            onClick={() => handleSort(sortBy.createdAt)}
          >
            Mới nhất
          </button>
          <button
            className={`${
              isActiveSortBy(sortBy.sold)
                ? 'bg-orange text-white hover:bg-orange/80'
                : 'bg-white text-black hover:bg-slate-100'
            } h-8  px-4 text-center text-sm capitalize `}
            onClick={() => handleSort(sortBy.sold)}
          >
            Bán chạy
          </button>
          <select
            className={`${
              isActiveSortBy(sortBy.price)
                ? 'bg-orange text-white hover:bg-orange/80'
                : 'bg-white text-black hover:bg-slate-100'
            } h-8 text-sm capitalize outline-none `}
            value={order || ''}
            onChange={(e) => handlePriceOrder(e.target.value as Exclude<ProductListConfig['order'], undefined>)}
          >
            <option value='' disabled className='bg-white text-black'>
              Giá
            </option>
            <option value={orderContant.asc} className='bg-white text-black'>
              Giá: Thấp đến cao
            </option>
            <option value={orderContant.desc} className='bg-white text-black'>
              Giá: Cao đến thấp
            </option>
          </select>
        </div>

        <div className='flex items-center'>
          <div>
            <span className='text-orange'>{page}</span>
            <span>/{pageSize}</span>
          </div>
          <div className='ml-2 flex'>
            {page === 1 ? (
              <span className='hover:bg-slate flex h-8 cursor-not-allowed items-center justify-center rounded-tl-sm rounded-bl-sm bg-white/60 px-3 shadow'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-3 w-3'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                </svg>
              </span>
            ) : (
              <Link
                to={{
                  pathname: path.home,
                  search: createSearchParams({
                    ...queryConfig,
                    page: (page - 1).toString()
                  }).toString()
                }}
                className='flex h-8 items-center justify-center rounded-tl-sm rounded-bl-sm bg-white px-3 shadow hover:bg-slate-100'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-3 w-3'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                </svg>
              </Link>
            )}
            {page === pageSize ? (
              <span className='flex h-8 cursor-not-allowed items-center justify-center rounded-tr-sm rounded-br-sm bg-white/60 px-3 shadow'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-3 w-3'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                </svg>
              </span>
            ) : (
              <Link
                to={{
                  pathname: path.home,
                  search: createSearchParams({
                    ...queryConfig,
                    page: (page + 1).toString()
                  }).toString()
                }}
                className='flex h-8 items-center justify-center rounded-tr-sm rounded-br-sm bg-white px-3 shadow hover:bg-slate-100'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-3 w-3'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
