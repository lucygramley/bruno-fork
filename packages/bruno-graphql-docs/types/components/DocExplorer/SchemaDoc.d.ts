/**
 *  Copyright (c) 2021 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { GraphQLSchema } from 'graphql';
import { OnClickTypeFunction } from './types';
type SchemaDocProps = {
    schema: GraphQLSchema;
    onClickType: OnClickTypeFunction;
};
export default function SchemaDoc({ schema, onClickType }: SchemaDocProps): React.JSX.Element;
export {};
