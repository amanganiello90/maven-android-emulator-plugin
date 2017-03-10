package com.amanga.android.emulator;

/*
 * Copyright 2001-2005 The Apache Software Foundation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import org.apache.maven.plugin.AbstractMojo;
import org.apache.maven.plugin.MojoExecutionException;

import org.apache.maven.plugins.annotations.LifecyclePhase;
import org.apache.maven.plugins.annotations.Mojo;
import org.apache.maven.plugins.annotations.Parameter;


import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

/**
 * Goal which run android emulator, download an apk and install it.
 *
 */
@Mojo( name = "install-run" )
public class InstallRunMojo
    extends AbstractMojo
{
    /**
     * Your Emulator Name
     */
    @Parameter( property = "apk-device", required = true )
    private File apkDevice;
    
    /**
     * Your apk classifier Name
     */
    @Parameter( property = "apk-profile", required = true )
    private File apkProfile;
    
    /**
     * Your apk version
     */
    @Parameter( property = "apk-version", required = true )
    private File apkVersion;
    

    public void execute()
        throws MojoExecutionException
    {
        
    }
}
