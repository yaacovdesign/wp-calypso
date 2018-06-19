/**
 * WordPress dependencies
 */
import React, { Component } from 'react';

class BlockCrashBoundary extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			hasError: false,
		};
	}

	componentDidCatch( error ) {
		this.props.onError( error );

		this.setState( {
			hasError: true,
		} );
	}

	render() {
		if ( this.state.hasError ) {
			return null;
		}

		return this.props.children;
	}
}

export default BlockCrashBoundary;
