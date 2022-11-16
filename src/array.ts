export function insertInArrayIf<TElement>(condition: boolean, ...elements: TElement[]): TElement[] {
    return condition ? elements : [] as TElement[];
}