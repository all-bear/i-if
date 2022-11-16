export function insertIntoArrayIf<TElement>(condition: boolean, ...elements: TElement[]): TElement[] {
    return condition ? elements : [] as TElement[];
}