wn.query_reports["Monthly Attendance Sheet"] = {
	"filters": [
		{
			"fieldname":"month",
			"label": "Month",
			"fieldtype": "Select",
			"options": "Jan\nFeb\nMar\nApr\nMay\nJun\nJul\nAug\nSep\nOct\nNov\nDec",
			"default": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", 
				"Dec"][wn.datetime.str_to_obj(wn.datetime.get_today()).getMonth()],
		},
		{
			"fieldname":"fiscal_year",
			"label": "Fiscal Year",
			"fieldtype": "Link",
			"options": "Fiscal Year",
			"default": sys_defaults.fiscal_year,
		},
		{
			"fieldname":"employee",
			"label": "Employee",
			"fieldtype": "Link",
			"options": "Employee"
		},
		{
			"fieldname":"company",
			"label": "Company",
			"fieldtype": "Link",
			"options": "Company",
			"default": wn.defaults.get_default("company")
		}
	]
}