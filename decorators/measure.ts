import { performance } from "perf_hooks";

export const measure: MethodDecorator = (
    target,
    propertyKey,
    descriptor: PropertyDescriptor
) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]): PropertyDescriptor {
        const start = performance.now();

        try {
            return originalMethod.apply(this, args);
        } finally {
            const finish = performance.now();
            console.log(`Execution time: ${finish - start} milliseconds`);
        }
    };

    return descriptor;
};
