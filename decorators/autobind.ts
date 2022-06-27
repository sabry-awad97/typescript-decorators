// autobind decorator
export function autobind(
    _: any,
    __: string,
    descriptor: PropertyDescriptor
): PropertyDescriptor {
    return {
        configurable: true,
        get() {
            return descriptor.value.bind(this);
        },
    };
}
