import { babel } from '@rollup/plugin-babel';
import pkg from './package.json';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default {
	preserveSymlinks: true,
	input: 'src/index.ts',
	output: [{
		format: 'esm',
		file: pkg.module,
		sourcemap: false,
	},
	{
		format: 'cjs',
		file: pkg.main,
		sourcemap: false,
	},
	{
		name: pkg['umd:name'] || pkg.name,
		format: 'umd',
		file: pkg.unpkg,
		sourcemap: false,
		plugins: [
			terser()
		],
	}],
	external: [
		...require('module').builtinModules,
		...Object.keys(pkg.dependencies || {}),
		...Object.keys(pkg.peerDependencies || {}),
	],
	plugins: [
		resolve(),
		typescript({ tsconfigOverride: {
			esModuleInterop: true,
		}, }),
		babel({ babelHelpers: 'bundled' })
	]
}
