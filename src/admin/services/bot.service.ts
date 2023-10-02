import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/utlils/firestore';

@Injectable()
export class BotService {
  async completeOrder(orderCode) {
    const { getDocuments } = FirestoreService();
    const orders = await getDocuments('orders');
    const order = orders.find(item => item.code === orderCode)
    if(!order){
      return {reply: `No se encontró ningún pedido con el código ${orderCode} ☹️`}
    }
    const response = `
      *Pedido:* ${orderCode}
      *Productos:*
      ${order.products.map((item: any) => (`
        *Nombre:* ${item.product.name}
        *Cantidad:* ${item.quantity}
        *Talla: ${item.size}*
        *Subtotal:* ${item.total}Bs.
      `))}

      *Tipo de entrega:* ${order.deliveryType}
      ${order.deliveryPoint && ('*Punto de entrega:* '+order.deliveryPoint)}

      *Total:* ${order.total}Bs.

      _Gracias por comprar en Urban Style Fashion_
      Para completar tu compra realiza lo siguiente:
      - Realiza el pago por QR por el total de ${order.total}Bs.
      - Envia el comprobante de pago en este mismo chat
      - Envia la palabra ".confirmar" con un punto al inicio de la palabra
    `
    console.log(order)
    return {reply: response}
  }
}
