import React, { Component } from 'react';

import create from '../redux/create';
import ConnectedAll from './ConnectedAll';

export default (options)=>{
	const store = create(options);

	class Cropper extends Component {
		componentDidMount(){
			if(this.props.onRedux) {
				this.props.onRedux(store)
			}
		}

		render() {
			return (
					<ConnectedAll options={this.props} store={store}/>
			);
		}
	}
	return Cropper;
}

//<DebugPanel top right bottom>
//<DevTools store={store}
//					monitor={LogMonitor}
//					visibleOnLoad={true}/>
//</DebugPanel>
