/**
 * WordPress dependencies
 */
import { createSlotFill, Toolbar } from '@wordpress/components';
import React from 'react';

/**
 * Internal dependencies
 */
import { ifBlockEditSelected } from '../block-edit/context';

const { Fill, Slot } = createSlotFill( 'BlockControls' );

const BlockControlsFill = ( { controls, children } ) => (
	<Fill>
		<Toolbar controls={ controls } />
		{ children }
	</Fill>
);

const BlockControls = ifBlockEditSelected( BlockControlsFill );

BlockControls.Slot = Slot;

export default BlockControls;
