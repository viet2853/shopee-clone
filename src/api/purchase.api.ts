import { Purchase, PurchaseListStatus } from './../types/purchase.type'
import { http } from 'src/utils/https'
import { SuccessResponse } from 'src/types/utils.type'

const URL = '/purchases'

const purchaseApi = {
  addToCart(body: { product_id: string; buy_count: number }) {
    return http.post<SuccessResponse<Purchase>>(`${URL}/add-to-cart`, body)
  },
  getPurchases(params: { status: PurchaseListStatus }) {
    return http.get<SuccessResponse<Purchase[]>>(`${URL}`, {
      params
    })
  },
  buyPurchases(body: { product_id: string; buy_count: number }[]) {
    return http.post<SuccessResponse<Purchase[]>>(`${URL}/buy-products`, body)
  },
  updatePurchase(body: { product_id: string; buy_count: number }) {
    return http.put<SuccessResponse<Purchase>>(`${URL}/update-purchase`, body)
  },
  deletePurchases(purchaseId: string[]) {
    return http.delete<SuccessResponse<{ deleted_count: number }>>(`${URL}`, {
      data: purchaseId
    })
  }
}

export default purchaseApi
