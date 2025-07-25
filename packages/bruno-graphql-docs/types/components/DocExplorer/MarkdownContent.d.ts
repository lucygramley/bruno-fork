/**
 *  Copyright (c) 2021 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */
import React from 'react';
type Maybe<T> = T | null | undefined;
type MarkdownContentProps = {
    markdown?: Maybe<string>;
    className?: string;
};
export default function MarkdownContent({ markdown, className }: MarkdownContentProps): React.JSX.Element;
export {};
