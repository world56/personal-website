-- 如果迁移到v1.3.0或更高版本，则需要手动执行该SQL文件
-- If migrating to v1.3.0 or later, this SQL file must be executed manually.

-- website 为默认数据库名，可根据实际情况变更
-- "website" is the default database name and can be changed as needed.

START TRANSACTION;

-- 1. 创建新列
-- 1. Create a new column
ALTER TABLE website.post ADD COLUMN type_new INT;

-- 2. 更新新列的值
-- 2. Update the new column values
UPDATE website.post 
SET type_new = 
    CASE type
        WHEN 'achievements' THEN 2
        WHEN 'notes' THEN 1
        WHEN 'life' THEN 0
        ELSE NULL
    END;

-- 3. 删除旧列
-- 3. Drop the old column
ALTER TABLE website.post DROP COLUMN type;

-- 4. 重命名新列
-- 4. Rename the new column
ALTER TABLE website.post RENAME COLUMN type_new TO type;

COMMIT;
