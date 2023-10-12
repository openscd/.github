# OpenSCD - Past, Present and Future (?)

## Past - Desktop-oriented SCL editor

The first variant of an SCL editor, OpenSCL was written in JavaFx and evolved out of a hobby project. It was driven by the challenges configuring multivendor IEC 61850 projects. The main motivation was to overcome this challenge:

|             |                                                                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Challenge 1 | IEC 61850-6 has a high degree of flexibility. In combination with a history of two decades, it results in a variety of interpretations by the tools on the market. |

The main idea to overcome this challenge was to create something where the users of IEC 61850 SCL can agree at a software level:

|              |                                                                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| Proposal 1.1 | Agree on software level. Agreeing on software level reduces some of the interpretation room given by the standard.                   |
| Proposal 1.2 | For an agreement on software level open-source is required. Only by seeing the code, a discussion can start.                         |
| Proposal 1.3 | The project shall be a collaborative project. The agreement process can only be successful by listening carefully to other opinions. |

The above proposals were not set to action with OpenSCL itself but with OpenSCD in its present form.

OpenSCL turned out to be a prototype. In this prototype, functionality was built very quickly. In a short period of time (some months) you could navigate through the data model, create and configure GSEControl elements as well as ReportControl elements and SampledValueControl elements. Those could be subscribed to sink IEDs. There was also an editor that allowed creating a substation section including a single line diagram.

The prototype was tested in a lab-scaled multivendor substation and was a total failure. Weeks of fiddling about and trying to fix the different issues lead to understanding of further challenges which needed to be addressed.

|             |                                                                                                                                                                                                      |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Challenge 2 | Creating an SCL file although a challenge is not the bottleneck. The exchange of SCL files between various tools is. Especially, the re-import back to IED configuration tools is a major challenge. |

It was not surprising after all. When building and testing software, a vendor is primarily doing this for their own ecosystem, not because of malicious intent but simply because of accessibility and costs. This paired with a very flexible standard and long history can cause such issues. It simply cannot be expected that tests be carried out with all other tools on the market. These missing tests, however, lead to poor outcomes when working in multivendor projects. This was another strong push towards a collaborative open-source project. The hope was that by having a large user group to allow time-consuming testing to be a shared project, borne on multiple shoulders better outcomes could be achieved.

|              |                                                                                                                      |
| ------------ | -------------------------------------------------------------------------------------------------------------------- |
| Proposal 2.1 | Give free and easy access to the software. This incentivizes users to test with vendors ICTs and report back issues. |

## Present - OpenSCD the Web Application

OpenSCD in its current form was designed from scratch with the challenges and proposals described in the previous section in mind. OpenSCL being a prototype, it is not surprising OpenSCD was started from scratch to avoid reproducing the mistakes from OpenSCL such as:

- JAXB is not good at dealing with multiple editions of one schema
- There was no undo and redo capability
- OpenSCL was not extendable
- OpenSCL did not have automated tests

It was decided to go with the browser as the browser has a powerful XML engine built in, there were a lot of JavaScript skills available, and it was very easy to ship.
OpenSCD came with a new plugin infrastructure. This is important, because it opens a new way to overcome challenge 2 like so:

|              |                                                                                                                                              |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Proposal 2.2 | Allow OpenSCD to be extendable in the easiest way possible to incentivize contributors outside OpenSCD organization to write their own code. |

Although the primary use case in mind was vendors contributing SCL export plugins, it also enabled other use cases as well. It is possible now to extend OpenSCD statically or dynamically without the permission or even the knowledge of the OpenSCD team.
OpenSCD on the other hand gives a global editing engine with a history, a fast schema validator and SCL knowledge through existing and general plugins.

The next change was triggered by another team working on an SCL editor and collaborating with a vendor. Due to a missing general purpose ???, it was decided to take this opportunity and build a plugin in its own repository, to integrate the needs of the vendor. This particular attempt changed the course of OpenSCD once again. The lesson we learned had nothing to do with SCL per se, but showed us that the thing we want to agree on when we want to agree on software level needs to be more modular than it was. In other words:

|          |                                                                                                                                                 |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Lesson 3 | Plugin authors outside OpenSCD want to reuse UI components as well as IEC 61850-6 logics built into some of the general plugins within OpenSCD. |

This lesson triggered a refactor of OpenSCD that is still ongoing.

|              |                                                                                                                                                                                                                 |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Proposal 3.1 | Next to the OpenSCD the distribution, share modular code components. Those shall be offered to the community to speed up the building of plugins and also to allow other users to build their own distribution. |

## Future: OpenSCD components and SCL library

> The work on both the OpenSCD components and the SCL library is still ongoing. This chapter is therefore describing the decision behind the attempt and is trying to outline a future of OpenSCD as an ecosystem.

The beginning marked a discussion about the capabilities and API of some core functionalities from OpenSCD that should be exported. Initially, only the core of the software - the open-scd component - with some IEC 61850-6 logic and some UI elements should be exported. It was then decided to also move the plugins hosted in OpenSCD to separate repositories within the OpenSCD organization.
The last decision is not really necessary to cover proposal 3.1, but was logical. One has to walk in the shoes of the outside plugin authors to design the other components well.
In addition to that, there are other advantages to this approach:

- Shared and clear responsibilities per plugin and code component.
- Code allocation becomes more difficult but also more conscious.

In addition to that, some other changes will result from this undertaking:

- In addition to the OpenSCD the distribution on https://openscd.github.io, there will be additional distributions of OpenSCD. OpenSCD components and an SCL library enables contribution outside the OpenSCD organization. The resulting ecosystem will consist of a variety of players and contributors shared over multiple organizations and repositories.
- There might be multiple solutions to one problem. E.g. there might be other implementations of a substation editor. This can have complete different or slightly different UI and functionality.
- There might be other distributions based on the code components provided by the OpenSCD organization.
- Other users of OpenSCD don’t have to work with a fork of the OpenSCD distribution anymore. They can instead use the code components offered by the OpenSCD organization directly.

The flexibility resulting from all the above does not make proposal 1.1 obsolete. We still want to agree on a software level. The components we will agree on will be changing though. Instead of agreeing on a complete application, including the choice of UI workflows and components, we focus the agreement process on the IEC 61850-6 logics offered in the SCL library.
