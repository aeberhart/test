import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { State } from '@dashjoin/json-schema-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  state: State = {
    schema: {
      type: 'string'
    },
    value: 'test',
    name: 'test',
    control: new FormControl()
  }

  ngOnInit(): void {
    this.state.control.valueChanges.subscribe(res => console.log(res))
  }

}
