declare module 'phaser3-rex-plugins/plugins/board/hexagonmap/GetHexagonMap' {
    import Board from 'phaser3-rex-plugins/plugins/board/board/Board';

    // Move this type to some utils place
    type PointArray = {x: number; y: number}[];

    export type GetHexagonMapType = (board: Board, radius: number, out?: PointArray) => PointArray;
    const GetHexagonMap: GetHexagonMapType;
    export default GetHexagonMap;
}
