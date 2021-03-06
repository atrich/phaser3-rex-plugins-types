declare module 'phaser3-rex-plugins/plugins/behaviors/textedit/Edit' {
    import TextEdit, {
        TextEditOpenConfig,
        OnTextEditClosed,
    } from 'phaser3-rex-plugins/plugins/behaviors/textedit/TextEdit';
    export default function Edit(
        gameObject: Phaser.GameObjects.GameObject,
        config: TextEditOpenConfig,
        onCloseCallback: OnTextEditClosed,
    ): TextEdit;
}
