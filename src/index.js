import './style';
import './bootstrap';
import './bootstrap-theme';
import { Component } from 'preact';

export default class App extends Component {
	render() {
		return (
			<div class="wrapper">
        <div class="container">
          <div class="row">
            <div class="timeline col-xs-2">
              <span>-200</span>
              <span>-100</span>
              <span>0</span>
              <span>100</span>
              <span>200</span>
              <span>300</span>
              <span>400</span>
              <span>500</span>
              <span>600</span>
              <span>700</span>
              <span>800</span>
              <span>900</span>
              <span>1000</span>
              <span>1100</span>
              <span>1200</span>
              <span>1300</span>
              <span>1400</span>
              <span>1500</span>
              <span>1600</span>
              <span>1700</span>
              <span>1800</span>
              <span>1900</span>
              <span>2000</span>
            </div>
            <div class="column col-xs-5 hist-col">
              <div class="item" style="top:40px">
                Lorem ipsum
              </div>
              <div class="item" style="top:80px">
                Lorem ipsum
              </div>
              <div class="item" style="top:100px">
                Lorem ipsum
              </div>
              <div class="item" style="top:140px">
                Lorem ipsum
              </div>
              <div class="item" style="top:180px">
                Lorem ipsum
              </div>
              <div class="item" style="top:400px">
                Lorem ipsum
              </div>
              <div class="block" style="top:400px" />
            </div>

          </div>
        </div>
      </div>
		);
	}
}
