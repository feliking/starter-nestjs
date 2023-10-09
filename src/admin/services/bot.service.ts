import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { collection, query, where } from 'firebase/firestore';
import { FirestoreService } from 'src/utlils/firestore';

@Injectable()
export class BotService {
  async completeOrder(datos: any) {
    const { db, customQuery, updateDocument } = FirestoreService();
    const orders = await customQuery(
      query(collection(db, 'orders'), where('code', '==', datos.message)),
    );
    if (orders.length === 0) {
      return {
        reply: `No se encontró ningún pedido con el código ${datos.message} ☹️`,
      };
    }
    const order = orders[0];
    if (order.finished) {
      return {
        reply: `El pedido con código ${datos.message} ya fué finalizado 😀`,
      };
    }
    let response = '*Pedido:* ' + datos.message;
    response += '\n*Productos:*\n';
    order.products.map((item: any) => {
      response += '\n*Nombre:* ' + item.product.name;
      response += '\n*Cantidad:* ' + item.quantity;
      response += '\n*Talla:* ' + item.size;
      response += '\n*Subtotal:* ' + item.total + 'Bs. ' + '\n\n';
    });
    response += '\n*Tipo de entrega:* ' + order.deliveryType;
    if (order.deliveryPoint) {
      response += '\n*Punto de entrega:* ' + order.deliveryPoint;
    }
    response += '\n*Total:* ' + order.total + 'Bs.';
    response += '\n\nPara completar tu compra realiza lo siguiente:';
    response +=
      '\n- Realiza el pago por QR por el total de ' + order.total + 'Bs.';
    response += '\n- Envia el comprobante de pago en este mismo chat';
    response +=
      '\n- Envia la palabra ".confirmar" con un punto al inicio de la palabra';
    console.log(order);
    await updateDocument('orders', order.id, {
      ...order,
      phone: datos.phone,
      finished: false,
    });
    return { reply: response };
  }

  async confirmOrder(datos: any) {
    const { db, customQuery, updateDocument } = FirestoreService();
    const orders = await customQuery(
      query(
        collection(db, 'orders'),
        where('phone', '==', datos.phone),
        where('finished', '==', false),
      ),
    );
    if (orders.length === 0) {
      return {
        reply: `No se encontró ningún pedido pendiente ☹️`,
      };
    }
    let order = orders[0];
    order.finished = true;
    order.finishedTimestamps = dayjs().toString();
    await updateDocument('orders', order.id, order);
    return {
      reply:
        'Gracias por comprar en *Urban Style Fashion*\n\nUno de nuestros operadores se contactará contigo pronto para coordinar la entrega de tu pedido\n\nQue tengas una agradable jornada 😀',
    };
  }
}
