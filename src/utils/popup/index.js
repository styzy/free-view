// import Vue from 'vue';

let zIndex = 2000;
let hasInitZIndex = false;

const PopupManager = {
    nextZIndex: () => {
        return PopupManager.zIndex++;
    }
}

Object.defineProperty(PopupManager, 'zIndex', {
    configurable: true,
    get() {
        if (!hasInitZIndex) {
            zIndex = zIndex;
            hasInitZIndex = true;
        }
        return zIndex;
    },
    set(value) {
        zIndex = value;
    }
});

export { PopupManager };