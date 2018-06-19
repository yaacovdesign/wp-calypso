/**
 * Internal dependencies
 */
import { name, settings } from '../';
import { blockEditRender } from '../../test/helpers';

describe( 'core/heading', () => {
	test( 'block edit matches snapshot', () => {
		const wrapper = blockEditRender( name, settings );

		expect( wrapper ).toMatchSnapshot();
	} );
} );
