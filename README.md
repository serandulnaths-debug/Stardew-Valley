# RemNote React Plugin Template

A template for building RemNote plugins using React and TypeScript.

## Performance Enhancements

- ⚡ **Bolt**: Parallelized plugin activation process in `src/widgets/index.tsx` using `Promise.all` to concurrently register settings, commands, and widgets, reducing initialization time.
