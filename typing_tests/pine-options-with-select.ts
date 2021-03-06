/// <reference types="node" />
import type * as BalenaSdk from '..';

// This file is in .prettierignore, since otherwise
// the @ts-expect-error comments would move to the wrong place

// @ts-expect-error
export const noTopSelect: BalenaSdk.PineOptionsWithSelect<BalenaSdk.Application> = {
	$expand: {
		owns__device: {
			$select: 'id',
		},
	},
	$filter: {
		id: 5,
	},
};

// @ts-expect-error
export const noTopSelect2: BalenaSdk.PineOptionsWithSelect<BalenaSdk.Application> = {
	$filter: {
		id: 5,
	},
};

export const noTopSelectFixed: BalenaSdk.PineOptionsWithSelect<BalenaSdk.Application> = {
	$select: 'id',
	$filter: {
		id: 5,
	},
};

export const propExpand: BalenaSdk.PineOptionsWithSelect<BalenaSdk.Application> = {
	$select: 'id',
	// @ts-expect-error
	$expand: 'owns__device',
	$filter: {
		id: 5,
	},
};

export const propExpandArray: BalenaSdk.PineOptionsWithSelect<BalenaSdk.Application> = {
	$select: 'id',
	// @ts-expect-error
	$expand: ['owns__device'],
	$filter: {
		id: 5,
	},
};

export const expandWithNoSelect: BalenaSdk.PineOptionsWithSelect<BalenaSdk.Application> = {
	$select: 'id',
	// @ts-expect-error
	$expand: {
		owns__device: {},
	},
	$filter: {
		id: 5,
	},
};

export const expandWithNoSelect2: BalenaSdk.PineOptionsWithSelect<BalenaSdk.Application> = {
	$select: 'id',
	// @ts-expect-error
	$expand: {
		owns__device: {
			$filter: {
				id: 5,
			},
		},
	},
	$filter: {
		id: 5,
	},
};

export const expandWithNoSelectFixed: BalenaSdk.PineOptionsWithSelect<BalenaSdk.Application> = {
	$select: 'id',
	$expand: {
		owns__device: {
			$select: 'id',
		},
	},
	$filter: {
		id: 5,
	},
};

export const nestedExpandWithNoSelect3: BalenaSdk.PineOptionsWithSelect<BalenaSdk.Application> = {
	$select: 'id',
	// @ts-expect-error
	$expand: {
		owns__device: {
			$expand: {
				device_environment_variable: {
					$select: ['name', 'value'],
				},
			},
		},
	},
};

export const nestedExpandWithNoSelect4: BalenaSdk.PineOptionsWithSelect<BalenaSdk.Application> = {
	$select: 'id',
	// @ts-expect-error
	$expand: {
		owns__device: {
			$select: 'id',
			$expand: {
				device_environment_variable: {},
			},
		},
	},
};

export const nestedExpandWithNoSelectFixed: BalenaSdk.PineOptionsWithSelect<BalenaSdk.Application> = {
	$select: 'id',
	$expand: {
		owns__device: {
			$select: 'id',
			$expand: {
				device_environment_variable: {
					$select: ['name', 'value'],
				},
			},
			$filter: {
				id: 5,
			},
		},
	},
	$filter: {
		id: 5,
	},
};
