namespace $ {
	export class $mol_bench_demo extends $mol_example_small {
		
		/**
		 * ```tree
		 * title \Benchmarking results visualization
		 * ```
		 */
		title() {
			return "Benchmarking results visualization"
		}
		
		/**
		 * ```tree
		 * sub / <= View
		 * ```
		 */
		sub() {
			return [
				this.View()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * tags /
		 * 	\perfomance
		 * 	\comparison
		 * ```
		 */
		tags() {
			return [
				"perfomance",
				"comparison"
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * aspects / \Widget/Grid
		 * ```
		 */
		aspects() {
			return [
				"Widget/Grid"
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * col_sort?val \mid
		 * ```
		 */
		@ $mol_mem
		col_sort(val?: any) {
			if ( val !== undefined ) return val as never
			return "mid"
		}
		
		/**
		 * ```tree
		 * result *
		 * ```
		 */
		result() {
			return {
			} as Record< string, any >
		}
		
		/**
		 * ```tree
		 * View $mol_bench
		 * 	col_sort?val <=> col_sort?val
		 * 	result <= result
		 * ```
		 */
		@ $mol_mem
		View() {
			const obj = new this.$.$mol_bench()
			
			obj.col_sort = (val?: any) => this.col_sort(val)
			obj.result = () => this.result()
			
			return obj
		}
	}
	
}

