/**
 *  Copyright (c) 2021 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { OnClickTypeFunction, FieldType } from './types';
type FieldDocProps = {
    field?: FieldType;
    onClickType: OnClickTypeFunction;
};
export default function FieldDoc({ field, onClickType }: FieldDocProps): React.JSX.Element;
export {};
