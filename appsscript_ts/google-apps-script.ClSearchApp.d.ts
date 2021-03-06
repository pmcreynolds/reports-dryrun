/**
 * @fileoverview TypeScript type definitions for Apps Script namespace: ClSearchApp.
 * This file was autogenerated by the Apps Script SDK.
 */


declare class ClSearchApp {
  static getChangelist(changelistNumber: number): ClSearchApp.Changelist;
  static getChangelistsForUser(user: string, minDate: Date, maxDate: Date): ClSearchApp.Changelist[];
  static getChangelistsReviewedByUser(user: string, minDate: Date, maxDate: Date): ClSearchApp.Changelist[];
  static searchChangelists(query: string): ClSearchApp.Changelist[];
}

declare namespace ClSearchApp {

  export interface Changelist {

    filesTruncated(): boolean;
    getApprovers(): string[];
    getAuthor(): string;
    getBug(): number[];
    getCCmail(): string[];
    getChangelistNumber(): number;
    getClient(): string;
    getDeltaAdded(): number;
    getDeltaChanged(): number;
    getDeltaDeleted(): number;
    getDeltaTotal(): number;
    getDepot(): string;
    getDescription(): string;
    getFiles(): string[];
    getOcl(): number;
    getOclDepot(): string;
    getReviewers(): string[];
    getStatus(): string;
    getTbrs(): string[];
    getTimestamp(): number;
    isPending(): boolean;

  }


}