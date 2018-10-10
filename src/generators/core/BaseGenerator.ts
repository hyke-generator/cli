export default abstract class BaseGenerator<T> {
    public abstract generate(args: T): void;
}
