namespace $ { $mol_style_attach( "mol/row/row.view.css",
 "[mol_row] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\talign-content: flex-start;\n\tjustify-content: flex-start;\n\tpadding: .5rem;\n\tflex: 1 0 auto;\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n\t/* border-radius: var(--mol_skin_round); */\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n}\n\n[mol_row] > * ,\n[mol_row_sub] > * {\n\tmargin: .5rem;\n\tmax-width: 100%;\n}\n\n[mol_row_sub] {\n\tmargin: 0;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex: 1 1 auto;\n}\n"
) }