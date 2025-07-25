/**
 *  Copyright (c) 2021 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { GraphQLType } from 'graphql';
import { OnClickTypeFunction } from './types';
type Maybe<T> = T | null | undefined;
type TypeLinkProps = {
    type?: Maybe<GraphQLType>;
    onClick?: OnClickTypeFunction;
};
export default function TypeLink(props: TypeLinkProps): React.JSX.Element;
export {};
