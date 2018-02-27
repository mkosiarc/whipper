package org.whipper.utils;

import java.io.File;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


public class OverrideFileSelector {
    private List<File> directories = new ArrayList<>();
    /**
     * @param directories
     *            list of directories containing expected results
     */
    public OverrideFileSelector(List <File> directories) {
        this.directories = directories;
        Collections.reverse(this.directories);
    }
    
    /**
    *
    * @param filename
    *            name of file
    * @return found file or null
    */
    public File getExpectedResultFile(String filename) {
        File file;
        for (File dir : directories) {
            file = new File(dir, filename);
            if (file.isFile()) {
                return file;
            }
        }
        return null; 
    }
}