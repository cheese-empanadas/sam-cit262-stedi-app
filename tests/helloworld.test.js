import HelloWorld from '../utils/helloworld';

it ("Says helloworld", () => {
    result = HelloWorld();

    expect(result).toBe("Hello, World!");
});