enum CaseStatus {
    ACTIVE = 1,
    FINALIZED = 2,
    DELETED = 0
}

export class Case{
    private caseID: number;
    private caseName: string;
    private profileName: string;
    private caseEmail: string;
    private caseDomain: string;
    private caseGenericUName: string;
    private instagramUName: string;
    private openDate: string;
    private caseStatus: CaseStatus;

    constructor(caseID: number, caseName: string, profileName: string = '', caseEmail: string = '', caseDomain: string = '', caseGenericUName: string = '', instagramUName: string = '', openDate: string = '', caseStatus: CaseStatus = 1) {
        this.caseID = caseID;
        this.caseName = caseName;
        this.profileName = profileName;
        this.caseEmail = caseEmail;
        this.caseDomain = caseDomain;
        this.caseGenericUName = caseGenericUName;
        this.instagramUName = instagramUName;
        this.openDate = openDate;
        this.caseStatus = caseStatus;
    }

    // Getter's
    public getID() {
        return this.caseID;
    }

    public getName() {
        return this.caseName;
    }

    public getProfile() {
        return this.profileName;
    }

    public getEmail() {
        return this.caseEmail;
    }

    public getDomain() {
        return this.caseDomain;
    }

    public getGenericUName() {
        return this.caseGenericUName;
    }

    public getInstagramUName() {
        return this.instagramUName;
    }

    public getOpenDate() {
        return this.openDate;
    }

    public getStatus() {
        return this.caseStatus;
    }

    // Setter's
    public setProfile(profileName: string) {
        this.profileName = profileName;
    }

    public setEmail(caseEmail: string) {
        this.caseEmail = caseEmail;
    }

    public setDomain(caseDomain: string) {
        this.caseDomain = caseDomain;
    }

    public setGenericUName(caseGenericUName: string) {
        this.caseGenericUName = caseGenericUName;
    }

    public setInstagramUName(instagramUName: string) {
        this.instagramUName = instagramUName;
    }

    public setOpenDate(openDate: string) {
        this.openDate = openDate;
    }

    public setStatus(caseStatus: CaseStatus) {
        this.caseStatus = caseStatus;
    }
}