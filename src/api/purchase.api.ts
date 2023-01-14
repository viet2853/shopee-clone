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
  }
}

export default purchaseApi
