module.exports = {
    categoryWithChildren: `
        WITH RECURSIVE subcategories AS (
            SELECT id FROM categories WHERE id = ?
            UNION ALL
            SELECT c.id FROM categories c
            INNER JOIN subcategories ON "parentId" = subcategories.id
        )
        SELECT id FROM subcategories
    `
}

/* module.exports = {
    categoryWithChildren: `
        WITH RECURSIVE subcategories AS (
            SELECT id FROM categories WHERE id = ?
            UNION ALL
            SELECT c.id FROM subcategories, categories c
            WHERE "parentId" = subcategories.id
        )
        SELECT id FROM subcategories
    `
}
 */