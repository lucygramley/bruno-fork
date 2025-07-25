/**
 *  Copyright (c) 2021 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { GraphQLArgument } from 'graphql';
import { OnClickTypeFunction } from './types';
type ArgumentProps = {
    arg: GraphQLArgument;
    onClickType: OnClickTypeFunction;
    showDefaultValue?: boolean;
};
export default function Argument({ arg, onClickType, showDefaultValue }: ArgumentProps): React.JSX.Element;
export {};
