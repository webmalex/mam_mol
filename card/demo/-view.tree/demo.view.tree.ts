namespace $ {
	export class $mol_card_demo extends $mol_example_small {
		
		/**
		 * ```tree
		 * title \Cards with optional status
		 * ```
		 */
		title() {
			return "Cards with optional status"
		}
		
		/**
		 * ```tree
		 * sub /
		 * 	<= Simple
		 * 	<= Pending
		 * ```
		 */
		sub() {
			return [
				this.Simple(),
				this.Pending()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * tags /
		 * 	\status
		 * 	\container
		 * 	\sticker
		 * ```
		 */
		tags() {
			return [
				"status",
				"container",
				"sticker"
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * aspects /
		 * 	\Widget/Layout
		 * 	\Widget/Island
		 * ```
		 */
		aspects() {
			return [
				"Widget/Layout",
				"Widget/Island"
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Simple $mol_card content / \Hello world!
		 * ```
		 */
		@ $mol_mem
		Simple() {
			const obj = new this.$.$mol_card()
			
			obj.content = () => [
				"Hello world!"
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Pending $mol_card
		 * 	title \Hello pending!
		 * 	status \pending
		 * ```
		 */
		@ $mol_mem
		Pending() {
			const obj = new this.$.$mol_card()
			
			obj.title = () => "Hello pending!"
			obj.status = () => "pending"
			
			return obj
		}
	}
	
}

