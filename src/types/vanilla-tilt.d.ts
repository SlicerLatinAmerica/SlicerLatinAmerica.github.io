declare module 'vanilla-tilt' {
    export type TiltOptions = Record<string, unknown>;

    export default class VanillaTilt {
        static init(
            elements: Element | Element[] | NodeListOf<Element>,
            options?: TiltOptions,
        ): void;
    }
}
