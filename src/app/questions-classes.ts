import { Text } from '@angular/compiler/src/i18n/i18n_ast';
import { Time } from '@angular/common';

export class Branches
{
    bid: Number;
    name: String;
    fullname: string;
}

export class Subjects
{
    sid: Number;
    subname: string;
    fullname: string;
}

export class Questions
{
    id: Number;
    marks: Number;
    difficulties: string[];
    qtext: Text;
    time: Time;
}

export class Policy 
{
    id: Number;
    number: Number;
    amount: Number;
}