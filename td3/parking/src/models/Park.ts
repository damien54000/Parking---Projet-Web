import { v4 as uuidv4 } from 'uuid';

export class Park {
  id: string;
  spot_id: number;
  startedAt: Date;
  endedAt: Date | null;
  price: number;
  paid: boolean;

  constructor(spot_id: number, startedAt: Date, price: number, paid: boolean, endedAt: Date | null = null) {
    this.id = uuidv4();
    this.spot_id = spot_id;
    this.startedAt = startedAt;
    this.endedAt = endedAt;
    this.price = price;
    this.paid = paid;
  }

  endParking(endedAt: Date) {
    this.endedAt = endedAt;
  }

  payParking() {
    this.paid = true;
  }
}
