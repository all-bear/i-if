import { insertInArrayIf } from "./array";
import { insertInObjectIf } from "./object";

export function insertIf<TElement>(condition: boolean, ...data: TElement[]);
export function insertIf<TObject>(condition: boolean, obj: TObject): TObject;

export function insertIf<TElementOrObject>(condition: boolean, ...data: TElementOrObject[] | [TElementOrObject]): TElementOrObject[] | TElementOrObject {
    return typeof data[0] === "object" ? insertInObjectIf(condition, data[0]) : insertInArrayIf(condition, ...data);
}