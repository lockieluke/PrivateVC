export class Formatting {
    private static bold: string = '**';
    private static italic: string = '/';
    private static boldNitalic: string = '***';
    private static underline: string = '__';
    private static underlineNitalic: string = '*__';
    private static underlineNbold: string = '**__';
    private static underlineNboldNitalic: string = '***__';
    private static strikethrough: string = '~~';
    private static singleLineCB: string = '`';

    public static Bold(): string {
        return this.bold;
    }

    public static Italic(): string {
        return this.italic;
    }

    public static BoldAndItalic(): string {
        return this.boldNitalic;
    }

    public static Underline(): string {
        return this.underline;
    }

    public static UnderlineAndItalic(): string {
        return this.underlineNitalic;
    }

    public static UnderlinAndBold(): string {
        return this.underlineNbold;
    }

    public static UnderlineAndBoldAndItalic(): string {
        return this.underlineNboldNitalic;
    }

    public static StrikeThrough(): string {
        return this.strikethrough;
    }

    public static SingleLineCodeBlock(): string {
        return this.singleLineCB;
    }
}