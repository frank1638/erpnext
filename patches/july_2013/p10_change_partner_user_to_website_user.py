import webnotes

def execute():
	webnotes.conn.sql("""update `tabProfile` set user_type="Website User" where user_type="Partner" """)
	webnotes.conn.sql("""update `tabProfile` set user_type="System User" where ifnull(user_type, "")="" """)
	
	webnotes.conn.sql("""update `tabProfile` set user_type='System User'
		where user_type='Website User' and exists (select name from `tabUserRole`
			where parent=`tabProfile`.name)""")