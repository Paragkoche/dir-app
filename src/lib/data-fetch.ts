/**
 * snippet search in supabase
 * const { data, error } = await supabase
 * .from('persons')
 * .select('*')
 * .textSearch('performance_review', 'nice working person', { type: 'websearch' })
 * .order('rank', { ascending: false });
 * console.log(data);
 */
