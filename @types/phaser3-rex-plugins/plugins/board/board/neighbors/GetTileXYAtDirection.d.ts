declare module 'phaser3-rex-plugins/plugins/board/board/neighbors/GetTileXYAtDirection' {
    export default function GetTileXYAtDirection(
        chess: any,
        directions: any[] | string | number,
        distance: number | {start: number; end: number; step: number} | number[],
        out?: any[],
    ): any[] | null;
}
