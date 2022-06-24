export interface CurrencyDb {
    Message:       string;
    Type:          number;
    MetaData:      MetaData;
    SponsoredData: any[];
    Data:          Coin[];
    RateLimit:     RateLimit;
    HasWarning:    boolean;
}

export interface Coin {
    CoinInfo: CoinInfo;
    RAW:      Raw;
    DISPLAY:  Display;
}

export interface CoinInfo {
    Id:                 string;
    Name:               string;
    FullName:           string;
    Internal:           string;
    ImageUrl:           string;
    Url:                string;
    Algorithm:          string;
    ProofType:          string;
    Rating:             Rating;
    NetHashesPerSecond: number;
    BlockNumber:        number;
    BlockTime:          number;
    BlockReward:        number;
    AssetLaunchDate:    string;
    MaxSupply:          number;
    Type:               number;
    DocumentType:       string;
}

export interface Rating {
    Weiss: Weiss;
}

export interface Weiss {
    Rating:                   string;
    TechnologyAdoptionRating: string;
    MarketPerformanceRating:  string;
}

export interface Display {
    USD: { [key: string]: string };
}

export interface Raw {
    USD: Usd;
}

export interface Usd {
    TYPE:                    string;
    MARKET:                  string;
    FROMSYMBOL:              string;
    TOSYMBOL:                string;
    FLAGS:                   string;
    PRICE:                   number;
    LASTUPDATE:              number;
    MEDIAN:                  number;
    LASTVOLUME:              number;
    LASTVOLUMETO:            number;
    LASTTRADEID:             string;
    VOLUMEDAY:               number;
    VOLUMEDAYTO:             number;
    VOLUME24HOUR:            number;
    VOLUME24HOURTO:          number;
    OPENDAY:                 number;
    HIGHDAY:                 number;
    LOWDAY:                  number;
    OPEN24HOUR:              number;
    HIGH24HOUR:              number;
    LOW24HOUR:               number;
    LASTMARKET:              string;
    VOLUMEHOUR:              number;
    VOLUMEHOURTO:            number;
    OPENHOUR:                number;
    HIGHHOUR:                number;
    LOWHOUR:                 number;
    TOPTIERVOLUME24HOUR:     number;
    TOPTIERVOLUME24HOURTO:   number;
    CHANGE24HOUR:            number;
    CHANGEPCT24HOUR:         number;
    CHANGEDAY:               number;
    CHANGEPCTDAY:            number;
    CHANGEHOUR:              number;
    CHANGEPCTHOUR:           number;
    CONVERSIONTYPE:          string;
    CONVERSIONSYMBOL:        string;
    SUPPLY:                  number;
    MKTCAP:                  number;
    MKTCAPPENALTY:           number;
    CIRCULATINGSUPPLY:       number;
    CIRCULATINGSUPPLYMKTCAP: number;
    TOTALVOLUME24H:          number;
    TOTALVOLUME24HTO:        number;
    TOTALTOPTIERVOLUME24H:   number;
    TOTALTOPTIERVOLUME24HTO: number;
    IMAGEURL:                string;
}

export interface MetaData {
    Count: number;
}

export interface RateLimit {
}
