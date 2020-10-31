import { Ticket } from './../ticket';
import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  tickets: Ticket[];
  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.ticketService.getUsers().subscribe((data: Ticket[]) => {
      console.log(data);
      this.tickets = data;
    });
  }

}
