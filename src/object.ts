export function insertInObjectIf<TObject>(condition: boolean, obj: TObject): TObject {
    return condition ? obj : {} as TObject;
}