export class Container {
    bindMap = new Map();

    // 实例的注册
    bind(identifier: string, clazz: any, constructorArgs: Array<any>) {
        this.bindMap.set(identifier, {
            clazz,
            constructorArgs
        });
    }

    // 实例的获取
    get<T>(identifier: string): T {
        const target = this.bindMap.get(identifier);
        const { clazz, constructorArgs } = target;
        const inst = Reflect.construct(clazz, constructorArgs);
    }
}
