/**
 *  Copyright (c) 2021 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { DirectiveNode } from 'graphql';
type DirectiveProps = {
    directive: DirectiveNode;
};
export default function Directive({ directive }: DirectiveProps): React.JSX.Element;
export {};
