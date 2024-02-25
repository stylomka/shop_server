import { ForbiddenException, Injectable } from '@nestjs/common';
import { MakePaymentDto } from './dto/make-payment.dto';
import axios from 'axios';

@Injectable()
export class PaymentService {
    async makePayment(makePaymentDto: MakePaymentDto) {
        try {
            const { data } = await axios({
                method: 'POST',
                url: 'https://api.yookassa.ru/v3/payments',
                headers: {
                    'Content-Type': 'application/json',
                    'Idempotence-Key': Date.now(),
                },
                auth: {
                    username: '335581',
                    password: 'test_eth5Sn5RE0nELDhhIGqjjfkku369XAH1AI9UNdk_ESU',
                },
                data: {
                    amount: {
                        value: makePaymentDto.amount,
                        currency: "RUB"
                      },
                      capture: true,
                      confirmation: {
                        type: "redirect",
                        return_url: "http://localhost:3001/order"
                      },
                      description: "Заказ №1",
                },
            });

            return data;
        } catch (error) {
            throw new ForbiddenException(error);
        }
    }
}

